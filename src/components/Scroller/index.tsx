import React from 'react';

/**
 * Component that renders buttons to scroll to the top and bottom of the page
 */
const Scroller = (props: {
    onClickScrollTop: () => void;
    onClickScrollBottom: () => void;
}) => {
    return (
        <div className="grid w-full grid-cols-2 gap-3 mt-3">
            <button
                className="btn"
                data-testid="scroll-to-top"
                onClick={() => props.onClickScrollTop()}
            >
                Scroll To Top
            </button>
            <button
                className="btn"
                data-testid="scroll-to-bottom"
                onClick={() => props.onClickScrollBottom()}
            >
                Scroll To Bottom
            </button>
        </div>
    );
};

export default Scroller;
