import Image from 'next/image';
import { produceMetaData } from '../../../../Utilities/produceMetaData';
import { CodeBlock } from '../../../../Components/CodeBlock';
import { SectionTitle } from '../../../../Components/SectionTitle';
import { YoutubeVideo } from '../../../../Components/YoutubeVideo';
import { TableOfContents } from '../../../../Components/TableOfContents';
import { ArticleBanner } from '../../../../Components/ArticleBanner';

export const metadata = produceMetaData({
  title: 'How to Effortlessly Extract Udemy Quizzes with a Custom Userscript',
  description: 'How I utilised UserScripts to enhance my Udemy experience',
  image:
    'https://personal-website-sfdajkfsadvvujfdsfyeusjhvbsdfhfdshbfdserf.s3.eu-west-2.amazonaws.com/og-images/og-image-udemy.jpeg',
});

export default function UdemyArticle() {
  return (
    <section className="page-center">
      <article className="page-content article-content">
        <ArticleBanner
          title="How to Effortlessly Extract Udemy Quizzes with a Custom Userscript"
          createdAt={new Date('2022-05-27T11:16:06.761Z')}
          lastUpdated={new Date('2022-06-04T22:25:57.626Z')}
        />

        <p>
          First I need to mention how much I love UserScripts. As the end-user when visiting a website you are in
          control of your personal view and how you interact with the website. Userscripts are a way to inject your own
          client-side JavaScript into any website. This allows you to edit the HTML, add new functionality, interact
          with APIs etc. Anything you can do with client-side JavaScript you can do in your UserScript.
        </p>

        <p>
          On Firefox I utilise an{' '}
          <a href="https://addons.mozilla.org/en-GB/firefox/addon/tampermonkey/">add on called Tampermonkey</a> to
          inject my UserScripts. Tampermonkey is also{' '}
          <a href="https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo">
            available as an extension on Chrome
          </a>{' '}
          and most <a href="https://www.tampermonkey.net/">other popular browsers.</a>
        </p>

        <p>
          You can also utilise other people's UserScripts without writing your own,{' '}
          <a href="https://www.userscript.zone/">userscript.zone</a> allows you to search for scripts by website name,{' '}
          <a href="https://greasyfork.org">Greasy Fork</a> is an online host of UserScripts that can easily be
          installed. When installing someone else's code it is your responsibility to understand what you are
          installing.
        </p>

        <TableOfContents
          content={[
            { display: 'Goal', url: '#goal' },
            {
              display: 'Video demo',
              url: '#video-demo',
              nestedContent: [
                {
                  display: 'Copy from practice test',
                  url: '#video-demo-copy-from-practice-test',
                },
                {
                  display: 'Copy from end of section quiz',
                  url: '#video-demo-copy-from-end-of-section-quiz',
                },
                {
                  display: 'End result in Zorbi',
                  url: '#end-result-in-zorbi',
                },
              ],
            },
            {
              display: 'Code',
              url: '#code',
              nestedContent: [
                {
                  display: 'Copy from practice test',
                  url: '#copy-from-practice-test',
                },
                {
                  display: 'Copy from end of section quiz',
                  url: '#copy-from-end-of-section-quiz',
                },
                {
                  display: 'Published on Greasy Fork',
                  url: '#greasy-fork-publish',
                },
              ],
            },
            {
              display: 'Lessons learned',
              url: '#lessons-learned',
            },
            {
              display: 'Potential problems',
              url: '#potential-problems',
            },
          ]}
        />

        <SectionTitle id="goal" className="font-semibold underline decoration-orange-400 decoration-wavy decoration-2">
          Goal
        </SectionTitle>
        <p>
          Personally, I find myself getting easily distracted when studying for AWS exams on Udemy, by removing one of
          the more tedious steps I can focus better and not end up on Reddit/HackerNews.
        </p>
        <p>
          The tedious step is that I would like to export quiz sections and practice tests for the AWS exam into a{' '}
          <a href="https://en.wikipedia.org/wiki/Spaced_repetition">Spaced Repetition Learning</a> (SRL) app. SRL isn't
          a service offered on the Udemy platform. (<a href="https://www.udemy.com/">Udemy</a> is an online education
          platform)
        </p>
        <p>
          I personally use an app called <a href="https://zorbi.app/">Zorbi</a>,{' '}
          <a href="https://apps.ankiweb.net/">Anki</a> is another popular choice.
        </p>
        <p>
          Unfortunately, it is not easy to highlight the text within Udemy quiz pages so I created a couple of
          UserScripts to make this process smoother for me. I have come across two types of quizzes so far on Udemy,
          quizzes that exist at the end of a course section and practice exam papers. For each quiz type I have a unique
          UserScript.
        </p>

        <SectionTitle
          id="video-demo"
          className="font-semibold underline decoration-orange-400 decoration-wavy decoration-2"
        >
          Video Demo
        </SectionTitle>

        <SectionTitle as="h3" id="video-demo-copy-from-practice-test">
          Copy from Practice Test
        </SectionTitle>

        <YoutubeVideo videoId="iNQTm9M3rbE" title="Copy from Practice Test" />

        <SectionTitle as="h3" id="video-demo-copy-from-end-of-section-quiz">
          Copy from End of Section Quiz
        </SectionTitle>

        <YoutubeVideo videoId="dTyebX77JPU" title="Copy from End of Section Quiz" />

        <SectionTitle as="h3" id="end-result-in-zorbi">
          End result in Zorbi
        </SectionTitle>
        <YoutubeVideo videoId="7WWEwf86RvE" title="Zorbi demo" />

        <SectionTitle id="code" className="font-semibold underline decoration-orange-400 decoration-wavy decoration-2">
          Code
        </SectionTitle>

        <SectionTitle as="h3" id="copy-from-practice-test">
          Code for Copying from Practice Test
        </SectionTitle>
        <CodeBlock
          canHide={true}
          githubLink="https://github.com/JohnFarrellDev/UserScripts/blob/main/UdemyCopyFromTest.js"
        >
          {codeCopyFromPracticeTest}
        </CodeBlock>

        <SectionTitle as="h3" id="copy-from-end-of-section-quiz">
          Code for Copying from End of Section Quiz
        </SectionTitle>
        <CodeBlock
          canHide={true}
          githubLink="https://github.com/JohnFarrellDev/UserScripts/blob/main/UdemyCopyFromSectionQuiz.js"
        >
          {codeCopyFromEndOfSectionQuiz}
        </CodeBlock>

        <SectionTitle
          id="greasy-fork-publish"
          className="font-semibold underline decoration-orange-400 decoration-wavy decoration-2"
        >
          Published on Greasy Fork
        </SectionTitle>

        <p>
          I have published both of these scripts to <a href="https://greasyfork.org">Greasy Fork</a>. The benefit of
          this is ease of installation and any changes I push to GitHub should be automatically picked up by Greasy
          Fork.
        </p>
        <p>
          <a href="https://greasyfork.org/en/scripts/446004-udemy-copy-from-section-quiz">
            Greasy Fork - Udemy Copy From Section Quiz
          </a>
        </p>
        <p>
          <a href="https://greasyfork.org/en/scripts/446005-udemy-copy-from-practice-test">
            Greasy Fork - Udemy Copy From Practice Test
          </a>
        </p>

        <SectionTitle
          id="lessons-learned"
          className="font-semibold underline decoration-orange-400 decoration-wavy decoration-2"
        >
          Lessons learned
        </SectionTitle>
        <p>
          By the time I got into web development the rise of the frameworks (Angular, Vue, React) had occurred, and I
          missed out on working with jQuery and vanilla JS. The frameworks are great but it is good to understand APIs
          offered by the browser and how to write vanilla JS to interact with the DOM (display object model). Working
          with UserScripts gives me some insight into web development without frameworks.
        </p>
        <p>
          An example from the code I wrote in these two scripts is that I utilised the{' '}
          <a href="https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver">Mutation Observer</a> class for
          the first time. Initially, when I first wrote this code I was utilising setTimeout and setInterval which felt
          hacky, I am far happier with the Mutation Observer implementation and it was a good tool to learn about.
        </p>
        <p>
          I also learned when using the mutation observer that is triggering a function that edits the HTML you need to
          ignore your own HTML changes or you'll cause infinite recursion and crash your browser :p
        </p>
        <p>
          When doing something like this I often think about the classic <a href="https://xkcd.com/">XKCD</a> for time
          saved vs time spent. I think it is important to also value the learning experience, if I ever need to do
          something like this again I could now do it very quickly.
        </p>
        <Image
          src="https://personal-website-sfdajkfsadvvujfdsfyeusjhvbsdfhfdshbfdserf.s3.eu-west-2.amazonaws.com/articles/udemy-copy-out-quizzes/is_it_worth_the_time.png"
          alt="Is It Worth the Time?"
          width={738}
          height={600}
        />

        <SectionTitle
          id="potential-problems"
          className="font-semibold underline decoration-orange-400 decoration-wavy decoration-2"
        >
          Potential problems
        </SectionTitle>
        <p>
          Udemy may have a variety of quizzes that exist outside of the two I have written UserScripts for, I may need
          to amend or create new scripts to handle future possible variations.
        </p>
        <p>
          The code is quite fragile, if Udemy change the HTML structure of their website or update CSS class names my
          scripts will break. Most likely it would only take a few minutes to update the code.
        </p>
        <p>
          There are no automated tests for any of the code in the UserScripts. It would be possible to take a snapshot
          of the HTML from a Udemy quiz to test my code against. I could also configure fetching the HTML snapshot from
          a Udemy page periodically and then run my tests to automatically catch if the HTML structure has been updated
          and requires my code to be changed. I doubt I'll do any of this though, I've already procrastinated enough
          making the scripts and writing this instead of studying AWS.
        </p>
      </article>
    </section>
  );
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
        // if mutation is caused by our added button elements return to avoid infinite recursion
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
})();`;

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
})();`;
