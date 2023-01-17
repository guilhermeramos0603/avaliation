import React, { useState } from "react";

const MyTabsComponent = () => {
    const [section, setSection] = useState(true)
    const [sectionNum, setSectionNum] = useState(1)

    const [classBtn1, setClassBtn1] = useState('btn-active')
    const [classBtn2, setClassBtn2] = useState('btn')

    const handleClicked = (event) => {
        const value = event.target.value

        if (value === '1') {
            setSection(true)
            setSectionNum('1')
            setClassBtn1('btn-active')
            setClassBtn2('btn')
        }

        if (value === '2') {
            setSection(true)
            setSectionNum('2')
            setClassBtn1('btn')
            setClassBtn2('btn-active')
        }
    }

    return <div className="tabs">
        <button className={classBtn1} value="1" onClick={handleClicked} disabled={sectionNum == '1'}>Section title 1</button>
        <button className={classBtn2} value="2" onClick={handleClicked} disabled={sectionNum == '2'}>Section title 2</button>
        <div className="view">
            {section ?
                <div>Content of section {sectionNum}</div> : null}
        </div>

    </div>
};

export default MyTabsComponent;
