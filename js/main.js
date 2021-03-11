import AppInputs from '../js/modules/AppInputs'
import AppActions from '../js/modules/AppActions'
import WeekDays from '../js/modules/WeekDays'

function Calendar() {
    const [inputJson, SetInputJson] = React.useState("");
    const [filteredPersons, setFilteredPersons] = React.useState("");
    
    let setInput = (input) => {
        SetInputJson(input);
    }

    let setFiltered = (input) => {
        setFilteredPersons(input);
    }

    return (
        <div>
            <h1 className="cal__title">Work Area</h1>
            <WeekDays persons={filteredPersons}></WeekDays>
            <div className="app__inputs">
               
                <AppInputs setInputs={setInput} />
                <AppActions inputData={inputJson} setFilteredData={setFiltered} />
            </div>
        </div>
    )
}

ReactDOM.render(
    <Calendar />, document.getElementById('work-area')
);