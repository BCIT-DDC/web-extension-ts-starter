import React from 'react';

import Hello from '@components/Hello';
import { browser, Tabs } from 'webextension-polyfill-ts';
import Scroller from '@components/Scroller';

// Scripts to execute in current tab
const scrollToTopScript = `window.scroll(0,0)`;
const scrollToBottomScript = `window.scroll(0,9999999)`;

/**
 * Executes a string of Javascript on the current tab
 * @param code - The string of code to execute on the current tab
 */
async function executeScript(code: string): Promise<void> {
    // Query for the active tab in the current window
    try {
        const tabs: Tabs.Tab[] = await browser.tabs.query({
            active: true,
            currentWindow: true,
        });

        const currentTab: Tabs.Tab | undefined = tabs[0];

        if (!currentTab) {
            return;
        }

        console.log(currentTab.url);

        if (currentTab.url?.includes('github')) {
            console.log('Where on github');

            await browser.tabs.executeScript(currentTab.id, {
                code,
            });

            console.log('Done Scrolling');
        }
    } catch (error) {
        console.log(error);
    }
}

const Popup = () => {
    // Sends the `popupMounted` event
    React.useEffect(() => {
        browser.runtime.sendMessage({ popupMounted: true });
    }, []);

    // Renders the component tree
    return (
        <div className="popupContainer">
            <div className="mx-4 my-4">
                <Hello />
                <hr />
                <Scroller
                    onClickScrollTop={() => {
                        executeScript(scrollToTopScript);
                    }}
                    onClickScrollBottom={() => {
                        executeScript(scrollToBottomScript);
                    }}
                />
            </div>
        </div>
    );
};

export default Popup;
