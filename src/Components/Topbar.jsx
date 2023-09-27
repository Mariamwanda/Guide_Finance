import "./topbar.css";

function Topbar() {
  return (
    <>
      <div class="top-container">
        <div action="#" class="search">
        <i class="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            class="search__input"
            placeholder="recherche..."
          />
        </div>
        <div class="user-nav">
          <button class="notification">
          <i class="fa-solid fa-bell"></i>
          </button>
          <div class="user-info">
          <i class="fa-solid fa-user-plus"></i>
            <span class="user-name">Wandaogo</span>
          </div>
          <i class="fa-solid fa-check fa-flip-vertical"></i>
        </div>
      </div>
    </>
  );
}

export default Topbar;
