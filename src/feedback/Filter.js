function Filter() {
  return (
    <div className="filter">
      <select class="form-select">
        <option selected>Hudud</option>
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
      <input type="text" placeholder="Kategoriya" />
      <div className="dataTime">
        <input type="data" placeholder="Vaqt (dan)" />
        <input type="data" placeholder="Vaqt (gacha)" />
      </div>
    </div>
  );
}

export default Filter;
