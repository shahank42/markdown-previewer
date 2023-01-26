import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const MarkdownRenderer = ({ rawMarkdown }) => {
    return (
        <div className="flex max-h-full">
            <div className="bg-neutral-800 w-full py-4 px-6 prose !prose-invert prose-neutral max-w-none" id="preview">
                <ReactMarkdown remarkPlugins={[remarkGfm]} >{ rawMarkdown }</ReactMarkdown>
            </div>
        </div>
    );
}

export default MarkdownRenderer;