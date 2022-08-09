const SecondComponent = (props) => {
    console.log(props);
    return (

        <div>
            <p> SecondComponent</p>
            <p> {props.title}</p>

        </div>

        
    );
};
export default SecondComponent
