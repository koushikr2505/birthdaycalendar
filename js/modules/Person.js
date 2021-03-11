const Person = (props) => {
    let noOfPersons = props.persons?props.persons.length:0;
    let gridSize = Math.ceil(Math.sqrt(noOfPersons));
    let width = Math.round(100/gridSize * 100) / 100;
    width+='%';
    const style = {
        width: width,
        height: width
      };
    return (
        <React.Fragment>
            { props.persons ? props.persons.map( (person,index) => {
                let initials = "";
                let displayName = person.name;
                let splitName = displayName.split(" ");
                let length = splitName.length;
                for (let i = 0; i < length; i++) {
                    initials += splitName[i].charAt(0);
                }
                return(
                    <div key={index} className="day__person" style={style}>{initials}</div> 
                )
                
            }):null}
        </React.Fragment>
    )
}

export default Person;