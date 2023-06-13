import { useEffect } from "react"

const UseTitle  = title => {
    useEffect(() => {
        document.title = `${title} - Online News Protal Bd`;

        }, [title])
};

export default UseTitle;