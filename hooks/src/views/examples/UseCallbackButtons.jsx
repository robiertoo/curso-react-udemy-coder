import { memo } from "react";

const UseCallbackButtons = ({ inc }) => {
    return (
        <div className="CallbackButtons">
            <button className="btn" onClick={() => inc(6)} >+6</button>
            <button className="btn" onClick={() => inc(12)} >+12</button>
            <button className="btn" onClick={() => inc(18)} >+18</button>
        </div>
    )
}

export default memo(UseCallbackButtons) 