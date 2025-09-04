// function App() {
//     return(
//         <>
//         <div>
//             <Paragraph class="Sonu"></Paragraph>
//         </div>
//         </>
//     )
// }

// function Paragraph(prop){
//     return <h3>hello, {prop.class}</h3>
// }
// export default App;

//Here, class is a prop passed from App (parent) → Paragraph (child).

function App() {
    return(
        <>
        <div>
            <Gucciarmani reposit="hiii i am enginner"></Gucciarmani>
        </div>
        </>
    )
}

function Gucciarmani(nikki) {
    return <p>hello! {nikki.reposit}</p>
}
export default App;