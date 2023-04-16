import React from 'react'
import { SectionTitle } from '../../../Utilities/SectionTitle'
import { SubSectionTitle } from '../../../Utilities/SubSectionTitle'
import { CodeBlock } from '../../../Utilities/CodeBlock'
import { Paragraph } from '../../../Utilities/Paragraph'
import Link from 'next/link'

export const Code = () => {
  return (
    <>
      <SectionTitle id="code">Code</SectionTitle>

      <SubSectionTitle id="copy-from-practice-test">
        Code for Copying from Practice Test
      </SubSectionTitle>
      <CodeBlock
        canHide={true}
        githubLink="https://github.com/JohnFarrellDev/UserScripts/blob/main/UdemyCopyFromTest.js"
      >
        {codeCopyFromPracticeTest}
      </CodeBlock>

      <SubSectionTitle id="copy-from-end-of-section-quiz">
        Code for Copying from End of Section Quiz
      </SubSectionTitle>
      <CodeBlock
        canHide={true}
        githubLink="https://github.com/JohnFarrellDev/UserScripts/blob/main/UdemyCopyFromSectionQuiz.js"
      >
        {codeCopyFromEndOfSectionQuiz}
      </CodeBlock>

      <SubSectionTitle id="greasy-fork-publish">
        Published on Greasy Fork
      </SubSectionTitle>

      <Paragraph>
        I have published both of these scripts to{' '}
        <Link href="https://greasyfork.org">Greasy Fork</Link>. The benefit of
        this is ease of installation and any changes I push to GitHub should be
        automatically picked up by Greasy Fork.
      </Paragraph>
      <Paragraph>
        <Link href="https://greasyfork.org/en/scripts/446004-udemy-copy-from-section-quiz">
          Greasy Fork - Udemy Copy From Section Quiz
        </Link>
      </Paragraph>
      <Paragraph>
        <Link href="https://greasyfork.org/en/scripts/446005-udemy-copy-from-practice-test">
          Greasy Fork - Udemy Copy From Practice Test
        </Link>
      </Paragraph>
    </>
  )
}

const codeCopyFromPracticeTest = `// ==UserScript==
// @name         Udemy - Copy from Practice Test
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Copy questions and answers from Udemy practice exams with ease
// @author       John Farrell (https://www.johnfarrell.dev/)
// @match        https://www.udemy.com/course/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=udemy.com
// ==/UserScript==

(function() {
    'use strict';

    // Select the node that will be observed for mutations
    const targetNode = document.querySelector('body');

    // Options for the observer (which mutations to observe)
    const config = { attributes: true, childList: true, subtree: true };

    const callback = function(mutationsList, observer) {
        // if muation is caused by our added button elements return to avoid infinte recursion
        if(mutationsList.find(el => el.addedNodes[0]?.id === "userscript-added-button")) return;

        const questionElementSelector = "div.detailed-result-panel--panel-row--2aE8z > form"
        document.querySelectorAll(questionElementSelector)
            .forEach(el => {

            // if button already added to the question/answer form return
            if(el.querySelector("#userscript-added-button")) return;

            const question = el.querySelector("#question-prompt").textContent.trim()
            const allAnswers = Array.from(el.querySelector("ul").querySelectorAll("p")).map(el => "\t•\t " + el.textContent.trim()).join("\n\n");
            const explanation = el.querySelector(".mc-quiz-question--explanation--Q5KHQ > div")?.textContent.trim()

            const copyQuestionButton = document.createElement("button");
            copyQuestionButton.setAttribute("id", "userscript-added-button")
            copyQuestionButton.innerHTML = "Copy Question";

            copyQuestionButton.addEventListener("click", () => {
                navigator.clipboard.writeText(question + "\n\n" + allAnswers)
            })

            const copyAnswerButton = document.createElement("button");
            copyAnswerButton.setAttribute("id", "userscript-added-button")
            copyAnswerButton.innerHTML = "Copy Answer";

            copyAnswerButton.addEventListener("click", () => {
                navigator.clipboard.writeText(explanation)
            })

            el.querySelector(".unstyled-list").append(copyQuestionButton)
            el.querySelector(".unstyled-list").append(copyAnswerButton)
        })
    };

    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);
})();`

const codeCopyFromEndOfSectionQuiz = `// ==UserScript==
// @name         Udemy - Copy from Section Quiz
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Easily copy questions and answers from Udemy section quizzes
// @author       John Farrell (https://www.johnfarrell.dev/)
// @match        https://www.udemy.com/course/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=udemy.com
// ==/UserScript==

(function() {
    'use strict';

    // Select the node that will be observed for mutations
    const targetNode = document.querySelector('body');

    // Options for the observer (which mutations to observe)
    const config = { attributes: true, childList: true, subtree: true };

    const callback = function(mutationsList, observer) {
        // return if mutationList contains mutations caused by us adding buttons, otherwise get infinite recursion until browser crashes
        if(mutationsList.find(el => el.addedNodes[0]?.id === "userscript-added-button-copy-question" || el.addedNodes[0]?.id === "userscript-added-button-copy-answer")) return;

        const isQuizPage = document.querySelector(".compact-quiz-container--compact-quiz-container--1BjpZ") !== null;
        if(!isQuizPage) return;

        const isQuestionStep = document.querySelector("button.udlite-btn-primary")?.textContent === "Check answer"
        const isAnswerStep = document.querySelector("button.udlite-btn-small:nth-child(1)")?.textContent === "Next" || document.querySelector("button.udlite-btn-small:nth-child(1)")?.textContent === "See results"

        const quizFooter = document.querySelector("div.curriculum-item-footer--flex-align-center--3ja06:nth-child(2)");

        if(isQuestionStep) {

            if(document.querySelector("#userscript-added-button-copy-question")) return

            // remove the copy answer button added from isAnswerStep
            const copyAnswerButton = document.querySelector("#userscript-added-button-copy-answer");
            copyAnswerButton?.parentNode.removeChild(copyAnswerButton);

            const question = document.querySelector("#question-prompt > p:nth-child(1)").innerText
            const answers = Array.from(document.querySelectorAll("#udemy > div.main-content-wrapper > div.main-content > div > div > main > div > div.app--row--1ydzX.app--body-container--10gJo > div > div > div > div > div > div > div > div > div > div > div > div > div > div > form > ul > li > label > div.udlite-heading-md > div > div > p")).map((el) => "\t• " + el.innerText);
            const copyText = question + "\n\n" + answers.join("\n");

            const copyQuestionButton = document.createElement("button");
            copyQuestionButton.setAttribute("id", "userscript-added-button-copy-question");
            copyQuestionButton.innerHTML = "Copy Question";
            copyQuestionButton.addEventListener("click", () => {
                navigator.clipboard.writeText(copyText)
            })

            quizFooter.append(copyQuestionButton);
        }
         else if(isAnswerStep) {

             if(document.querySelector("#userscript-added-button-copy-answer")) return

            const answers = Array.from(document.querySelectorAll('input[type=radio]'))
                .filter(el => el.checked)
                .map(el => el.parentElement.textContent.trim()).join("\n\n")
            const addidtionalInfo = document.querySelector(".alert-banner--body--1ucrB")?.textContent.trim() || '';
            const copyText = addidtionalInfo ? answers + "\n\n" + addidtionalInfo : answers;

            const copyAnswerButton = document.createElement("button");
            copyAnswerButton.setAttribute("id", "userscript-added-button-copy-answer");
            copyAnswerButton.innerHTML = "Copy Answer";
            copyAnswerButton.addEventListener("click", () => {
                navigator.clipboard.writeText(copyText)
            })

            quizFooter.append(copyAnswerButton);

             const nextQuestionSelector = 'button.udlite-btn-small:nth-child(1)'
            document.querySelector(nextQuestionSelector).addEventListener("click", () => {
                // remove the copy question button when we click to go to the next question
                const copyQuestionButton = document.querySelector("#userscript-added-button-copy-question");
                copyQuestionButton?.parentNode.removeChild(copyQuestionButton);
            })
        }
    }


    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);
})();`
