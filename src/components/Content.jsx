import { useState } from "react";
import MarkdownEditor from "./MarkdownEditor";
import MarkdownRenderer from "./MarkdownRenderer";

const Content = () => {
    const [content, setContent] = useState(`# This is a Markdown Previewer.
        \n ## FYI, you can remove these boilerplate lines
        \n They're just so I can complete the requirements of [this project](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer) .
        \n  \`\`\`js 
        \n  I used React.js, TailwindCSS and marked-react to build this.
        \n  \`\`\` 
        \n \`Kinda cool once you think about it.\`
        \n At first I just thought I'd make something quickly and get over with it.
        \n But as I was building this, I realized something.
        \n  > Markdown editors are pretty dang cool
        \n So I figured that I'd actually put some effort into this.
        \n * I've completed basic functionality
        \n * Need to look at getting things to stay in the screen without overflowing
        \n     * That means design stuff
        \n And here's a completely random picture of Denji and Pochita from Chainsaw Man:
        \n  ![Totally awesome anime picture](https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/04/Mappas-Chainsaw-Man.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5) 
        \n **Like what you see?** Then go ahead and start this project on my GitHub. 
        \n Go on, I won't look.
        \n :-)
    `);

    return (
        <div className="flex-grow bg-slate-300 flex flex-row">
            <div className="bg-slate-300 w-1/2">
                <MarkdownEditor content={content} setContent={setContent} />
            </div>
            <div className="bg-slate-300 w-1/2">
                <MarkdownRenderer rawMarkdown={content}/>
            </div>
        </div>

    );
}

export default Content;