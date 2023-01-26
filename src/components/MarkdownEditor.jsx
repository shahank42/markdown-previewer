const MarkdownEditor = ({ content, setContent }) => {
    return (
            <div className="flex h-full">
                <textarea placeholder="Type markdown here..." name="editor" id="editor" className="form-control text-sm font-mono resize-none bg-neutral-300 w-full block px-3 py-2 transition outline-2 text-gray-600 active:border-none focus:border-none focus:outline-none" value={content} onChange={e => setContent(e.target.value)}></textarea>
            </div>
    );
}

export default MarkdownEditor;