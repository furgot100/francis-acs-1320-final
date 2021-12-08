import data from './metal.json';
import './Heading.css';

function Header() {
    const total = data.map((obj) => {
        return obj.ID
    })

    return (
      <div className="Heading">
        <h1>Francis Tsang</h1>
        <p>Final Assessment</p>
        <p >Total bands: {total.length}</p>
      </div>
    )
}
  
export default Header