import Markdown from "marked-react";

const MarkdownRenderer = ({ rawMarkdown }) => {
    return (
        <div className="flex h-full">
            <div className="bg-white w-full py-4 px-6 prose max-w-none mx-3" id="preview">
                <Markdown className="overflow-y-scroll">{ rawMarkdown }</Markdown>
            </div>
        </div>
    );
}

export default MarkdownRenderer;