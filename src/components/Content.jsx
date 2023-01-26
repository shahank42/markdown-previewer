import { useEffect, useState } from "react";
import MarkdownEditor from "./MarkdownEditor";
import MarkdownRenderer from "./MarkdownRenderer";
import GUN from "gun";

let contentP2P = GUN({peers: ['http://localhost:8080/gun']}).get("markdown-editor-shjfbshvb");

const Content = () => {
    const [content, setContent] = useState("# Welcome to Markdown Editor");

    useEffect(()=>{
        contentP2P.on((newContent)=>{
           setContent(newContent.text);
        })
    },[]);

    useEffect(()=>{
        contentP2P.put({text: content});
    }, [content]);

    

    return (
        <div className="flex-grow bg-slate-300 flex flex-row">
            <div className="bg-slate-300 w-1/2">
                <MarkdownEditor content={content} setContent={setContent}/>
            </div>
            <div className="bg-slate-300 w-1/2">
                <MarkdownRenderer rawMarkdown={content}/>
            </div>
        </div>

    );
}

export default Content;
