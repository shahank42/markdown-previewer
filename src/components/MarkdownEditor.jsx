const MarkdownEditor = ({ content, setContent }) => {
    return (
            <div className="flex h-full">
                <textarea placeholder="Type markdown here..." name="editor" id="editor" className="form-control resize-none bg-white w-full block px-3 py-2 mx-3 my-5 transition outline-2 text-gray-600 overflow-y-scroll" value={content} onChange={e => setContent(e.target.value)}></textarea>
            </div>
    );
}

export default MarkdownEditor;