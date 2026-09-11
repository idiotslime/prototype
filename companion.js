(function() {
    "use strict";

    const isEnglish = new URLSearchParams(window.location.search).get("lang") === "en";
    const copy = isEnglish ? {
        name: "KAORUKO / TRAVEL BUDDY",
        first: "Hi! I am here to help you find a trip that feels like yours.",
        normal: ["I am bored...", "Have you found somewhere you want to go?", "Honestly, if choosing is this hard, staying home would be kinder to your time and wallet. Just my opinion."],
        afk: ["Did you fall asleep? Surely not.", "maka m1 m1 m1 m1 3 m1 m1 m1 m1 2 2 m1 m1 m1 m1 m1 1 m1 m1 m1 m1 m1 2 m1 m1 m1 m1 m1 4", "You have coins in your wallet that you plan to use, but never do because it is too much trouble, right?"],
        diagnosis: "Are you not a little bored while taking a quiz like this? I am bored.",
        tokyo: "Tokyo, I see. You have excellent taste."
    } : {
        name: "薫子",
        first: "ごきげんよう。貴様の旅路探しを己が手助けいたしますわ。",
        normal: ["暇ですわ～。", "貴様は行きたい場所の一つでも見つけることはできましたの？", "正直悩むくらいなら行かないほうが時間にもお財布にも優しいと思いますわ。あくまで主観ですけれど。"],
        afk: ["もしかして寝ましたの？そんなことありませんわよね？", "maka m1 m1 m1 m1 3 m1 m1 m1 m1 2 2 m1 m1 m1 m1 m1 1 m1 m1 m1 m1 m1 2 m1 m1 m1 m1 m1 4", "財布の中に入ってる小銭って、使うって思っていながら結局めんどくさくて使わないわよね。"],
        diagnosis: "こういう診断を受けているときって少々退屈じゃありませんこと？私は退屈ですわ～。",
        tokyo: "東京ですわね。貴様、いいセンスをお持ちのようですわね。"
    };

    const companion = document.createElement("aside");
    companion.className = "site-companion";
    companion.setAttribute("aria-label", copy.name);
    companion.innerHTML = `
        <div class="site-companion__body">
            <img class="site-companion__figure" src="images/character/minikaoruko.base.png" alt="旅しるべの案内役">
            <div class="site-companion__bubble" role="status" aria-live="polite">
                <span class="site-companion__name">${copy.name}</span>
                <p class="site-companion__message"></p>
            </div>
        </div>
    `;
    document.body.appendChild(companion);

    const message = companion.querySelector(".site-companion__message");
    const figure = companion.querySelector(".site-companion__figure");
    let currentReply = copy.first;
    let attentionTimer;
    let bubbleTimer;
    let typingTimer;
    let afkTimer;
    const oneTimeLines = new Set();

    function typeMessage(text) {
        window.clearInterval(typingTimer);
        message.textContent = "";
        let index = 0;
        typingTimer = window.setInterval(function() {
            message.textContent += text.charAt(index);
            index += 1;
            if (index >= text.length) {
                window.clearInterval(typingTimer);
            }
        }, 42);
    }

    function say(text, showBubble) {
        currentReply = text;
        typeMessage(text);
        companion.classList.add("is-visible");
        if (showBubble !== false) {
            companion.classList.add("is-bubble-visible");
        }
    }

    function introduce(text) {
        window.clearTimeout(bubbleTimer);
        companion.classList.remove("is-bubble-visible");
        say(text, false);
        bubbleTimer = window.setTimeout(function() {
            if (companion.classList.contains("is-visible") && !companion.classList.contains("is-peeking")) {
                companion.classList.add("is-bubble-visible");
            }
        }, 2700);
    }

    function contextLine() {
        const questionArea = document.getElementById("questionArea");
        if (questionArea) {
            const questionBox = questionArea.getBoundingClientRect();
            if (questionBox.top < window.innerHeight * 0.72 && questionBox.bottom > 0) {
                return { key: "diagnosis", text: copy.diagnosis };
            }
        }

        const visibleHeadings = Array.from(document.querySelectorAll("h1, h2"))
            .filter(function(element) {
                const box = element.getBoundingClientRect();
                return box.top < window.innerHeight * 0.72 && box.bottom > 0;
            });
        const heading = visibleHeadings[visibleHeadings.length - 1];
        if (!heading) return null;
        const text = heading.textContent.replace(/\s+/g, " ").trim();
        if (/東京|Tokyo|スポット|Spots/i.test(text)) {
            return { key: "tokyo", text: copy.tokyo };
        }
        return null;
    }

    function randomLine(lines) {
        return lines[Math.floor(Math.random() * lines.length)];
    }

    function contextOrNormalLine() {
        const context = contextLine();
        if (context && !oneTimeLines.has(context.key)) {
            oneTimeLines.add(context.key);
            return context.text;
        }
        return randomLine(copy.normal);
    }

    function resetAfkTimer() {
        window.clearTimeout(afkTimer);
        afkTimer = window.setTimeout(function() {
            if (!companion.classList.contains("is-peeking")) {
                say(randomLine(copy.afk));
            }
            resetAfkTimer();
        }, 45000);
    }

    function schedulePeek() {
        clearTimeout(attentionTimer);
        attentionTimer = window.setTimeout(function() {
            companion.classList.add("is-peeking");
            window.setTimeout(function() {
                companion.classList.remove("is-visible");
            }, 1800);
            window.setTimeout(function() {
                companion.classList.remove("is-peeking");
                introduce(contextOrNormalLine());
                schedulePeek();
            }, 23800);
        }, 32000);
    }

    figure.addEventListener("click", function() {
        say(contextOrNormalLine());
    });

    ["keydown", "pointerdown", "scroll", "touchstart"].forEach(function(eventName) {
        window.addEventListener(eventName, resetAfkTimer, { passive: true });
    });

    window.setTimeout(function() {
        introduce(copy.first);
        schedulePeek();
        resetAfkTimer();
    }, 5000);
}());
