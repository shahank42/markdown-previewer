import { useState } from "react";
import MarkdownEditor from "./MarkdownEditor";
import MarkdownRenderer from "./MarkdownRenderer";

const Content = () => {
    const [content, setContent] = useState(`# This is a Markdown Previewer.`);

    return (
        <div className="flex-grow flex lg:md:flex-row">
            <div className="bg-neutral-800 w-1/2">
                <MarkdownEditor content={content} setContent={setContent} />
            </div>
            <div className="bg-neutral-800 w-1/2">
                <MarkdownRenderer rawMarkdown={content}/>
            </div>
        </div>

    );
}

export default Content;