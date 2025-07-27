var i = 0;
function style() {
  if(i % 2 == 0) document.body.classList.replace("blue", "red");
  else document.body.classList.replace("red", "blue");
  i++;
}

const tooltipValueCheck = (value) => {
  const text = "Не известно";
  if(value === undefined) return text;
  if(value === null) return text;
  if(value === "") return text;
  if(value === "null") return text;
  return value;
};

const div = document.createElement("div");
div.classList.add("tooltip");

const handleOut = (event) => {
  // console.log(event);
  if(event.relatedTarget === div) return;
  div.remove();
};

/**
 * @param {string} text
 * @returns {string}
 */
const makeLinksClickable = (text) => {
  const urlRegex = /(https?:\/\/[^\s]+)|(www\.[^\s]+)/g;

  return text.replace(urlRegex, (url) => {
    let link = url;
    if(!link.startsWith("http")) {
      link = "http://" + link;
    }
    return `<a href="${link}" target="_blank">${url}</a>`;
  });
};

/**
 * @param {UserStatus} status
 * @returns {string}
 */
const getUserStatus = (status) => {
  switch(status) {
    case "active":
      return "Пользователь активен";
    case "deleted":
      return "Пользователь удалён";
    case "banned":
      return "Пользователь забанен";
    default:
      return "";
  }
};

/**
 * @param {HTMLLIElement} liElement
 * @param {User} item
 * @returns
 */
const createTooltip = (liElement, item) => {
  // console.log(lievent);
  div.innerHTML = "";
  const body = document.body.clientWidth;
  const x = liElement.offsetLeft + liElement.children[0].offsetWidth + 10;

  // div.style.left = `${x}px`;
  div.style.top = `${liElement.offsetTop}px`;

  let h3 = document.createElement("h3");
  h3.textContent = tooltipValueCheck(item.name);
  div.appendChild(h3);

  if(item.status) {
    let p = document.createElement("p");
    p.textContent = getUserStatus(item.status);
    div.appendChild(p);
  }

  let p = document.createElement("p");
  p.textContent = `Дата добавления: ${tooltipValueCheck(item.created_at)}`;
  div.appendChild(p);

  let divReason = document.createElement("div");
  divReason.textContent = `Причина: ${makeLinksClickable(
    tooltipValueCheck(item.reason)
  )}`;
  div.appendChild(divReason);

  let pRole = document.createElement("p");
  pRole.textContent = `Роль: ${tooltipValueCheck(item.user_role)}`;
  div.appendChild(pRole);

  document.body.appendChild(div);
  console.log(h3.offsetWidth);
  const maxWidth = div.querySelector("div").clientWidth;
  console.log(maxWidth);
  div.style.width = `${maxWidth}px`;

  if(x + div.clientWidth > body) {
    if(liElement.offsetLeft - div.clientWidth - 10) {
      div.style.top = `0px`;
      div.style.bottom = `${liElement.offsetTop}px`;
    } else {
      div.style.left = `${liElement.offsetLeft - div.clientWidth - 10}px`;
    }
  } else {
    div.style.left = `${x}px`;
  }
  // div.addEventListener("mouseleave", handleOut);
};

/**
 * @param {User} item
 * @returns {HTMLLIElement}
 */
const createLi = (item) => {
  const li = document.createElement("li");
  li.classList.add("user");
  const name = item.status === "deleted" ? `<s>${item.name}</s>` : item.name;
  if(item.link) {
    li.innerHTML = `<span>${name}<a href="${item.link}" class="userlink" target="_blank">&#x1F517;</a></span>`;
  } else {
    li.innerHTML = `<span>${name}</span>`;
  }
  // li.addEventListener("mouseenter", (event) => createTooltip(li, item));
  // li.addEventListener("mouseleave", handleOut);
  let isTooltipVisible = false;
  li.addEventListener("click", (event) => {
    if(isTooltipVisible) {
      if(div) div.remove();
    } else {
      createTooltip(li, item);
    }
    isTooltipVisible = !isTooltipVisible;
  });
  return li;
};

window.addEventListener("load", async (event) => {
  const response = await fetch("data.json");
  /** @type {User[]} */
  const data = await response.json();
  const board = document.getElementById("shameBoard");

  board.append(
    ...data
      .filter((user) => user.list_name === "shame")
      .map((user) => createLi(user))
  );

  const h2 = document.createElement("h2");
  h2.textContent = "Чистилище";
  board.appendChild(h2);
  // board.innerHTML += "<h2>Чистилище</h2>"; //без h2 и section

  board.append(
    ...data
      .filter((user) => user.list_name === "limbo")
      .map((user) => createLi(user))
  );
  style();
  // setInterval(style, 3000);
});
