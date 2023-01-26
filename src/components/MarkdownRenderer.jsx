import Markdown from "marked-react";
import ReactMarkdown from "react-markdown";

const MarkdownRenderer = ({ rawMarkdown }) => {
    return (
        <div className="flex max-h-full">
            <div className="bg-neutral-800 w-full py-4 px-6 prose dark:prose-invert prose-neutral max-w-none" id="preview">
                {/* <Markdown className="overflow-y-scroll">{ rawMarkdown }</Markdown> */}
                <ReactMarkdown>{ rawMarkdown }</ReactMarkdown>
            </div>
        </div>
    );
}

export default MarkdownRenderer;