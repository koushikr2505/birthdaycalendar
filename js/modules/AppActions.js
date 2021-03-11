import MessageToast from './MessageToast'
const AppActions = (props) => {
    const [year, setYear] = React.useState('1989');
    const [message,setMessage] = React.useState("");
    let inputData = props.inputData;

    let filterData = (year, inputData) => {
        let persons = typeof inputData === 'string' ? JSON.parse(inputData) : inputData;
        let filteredPersonsData = persons.filter(person => { return new Date(person.birthday).getFullYear().toString() === year });

        if (filteredPersonsData.length > 0) {
            let ageAndDayData = [...filteredPersonsData];
            ageAndDayData.map(person => {
                let dobd = person.birthday.split('/');
                let dayOfBirth = dobd[1];
                let month = dobd[0];
                let year = dobd[2];
                let dob = new Date(year, month - 1, dayOfBirth);
                let day = dob.getDay();
                person.ageDate = dob;
                person.dayOfBirth = day;
            });
            ageAndDayData.sort(function (a, b) {
                if (a.ageDate < b.ageDate) {
                    return -1;
                }
                if (a.ageDate > b.ageDate) {
                    return 1;
                }
                return 0;
            });
            props.setFilteredData(ageAndDayData);
            setMessage('');
        } else {
            //props.setFilteredData([]); Uncomment this line if we need to clear the existing persons on the cards when no data is found.
            setMessage('Given year is not found in the data.');
            return false;
        }

    }

    React.useEffect(() => {
        inputData.length > 0 ? filterData(year, inputData) : null;
    }, [inputData]);

    let handleClick = (e) => {
        filterData(year, inputData);
    }

    return (
        <div className="app__actions">
            <label>Year</label>
            <input className="app__input js-year" type="text" defaultValue={year} onChange={(e) => setYear(e.target.value)} />
            {message.length>0?<MessageToast nameOfClass={"year-error"} message={message}></MessageToast>:null}
            <a className="app__button js-update" onClick={handleClick}>Update</a>
        </div>
    )
}

export default AppActions;