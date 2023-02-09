import '../products/feedback.css';
// import { Link } from 'react-router-dom';
function FilterGroup() {
    return (
    <div className="filter">
      <select className="form-select">
        <option defaultValue>Hudud</option>
        <option value="1">Toshkent</option>
        <option value="2">Farg'ona</option>
        <option value="3">Namangan</option>
        <option value="4">Andijon</option>
        <option value="5">Sirdaryo</option>
        <option value="6">Samarqand</option>
        <option value="7">Qashqadaryo</option>
        <option value="8">Surxondaryo</option>
        <option value="9">Navoiy</option>
        <option value="10">Buxoro</option>
        <option value="11">Qoraqalpog'iston</option>
        <option value="12">Jizzax</option>
      </select>
      {/* kategory */}
      <select className="form-select">
        <option defaultValue>Kategoriya</option>
        <option value="1">Pul</option>
        <option value="2">Hamyon</option>
        <option value="3">Tilla taqinchoqlar</option>
        <option value="4">Plastik karta</option>
        <option value="5">Shaxsiy Hujjatlar</option>
        <option value="6">Telefon</option>
        <option value="7">Uy hayvonlari</option>
        <option value="8">Boshqa</option>
      </select>
      {/* ======== */}
      <div className="dataTime">
        <input type="date" className='date' placeholder="Vaqt (dan)" />
        <input type="date" className='date' placeholder="Vaqt (gacha)" />
      </div>
      <button type="submit" className="btn">Filterlash</button>
    </div>
  );
}

export default FilterGroup;
