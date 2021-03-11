import Person from '../modules/Person'

const DayOfTheWeek = (props) => {
    let personsData = props.personData;
    return (
        <React.Fragment>
       { personsData? <li className={`cal__day ${personsData.length === 0 ? "day--empty" : ""}`} data-day={props.day}>
            <div className="day__date"></div>
            <div className="day__people">
                <Person persons={props.personData}></Person>
            </div>
            <div className="birthCount">
                {personsData.length === 0?"No Birthdays": personsData.length === 1? personsData.length+" "+"birthday":personsData.length+" "+"birthdays"}
            </div>
        </li>:""}
        
        </React.Fragment>
    )
}

export default DayOfTheWeek;