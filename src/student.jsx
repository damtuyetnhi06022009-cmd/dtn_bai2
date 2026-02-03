function Student(props){
    return(
        <div style={{  
            width:1280,
            textAlign:"left"
        }}>
            <h2>Tên:{props.name}</h2>
            <p>Tuổi:{props.age}</p>
            <p>Lớp:{props.class}</p>
        </div>
    )
}
export default Student