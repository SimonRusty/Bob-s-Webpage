let selectElement;

document.addEventListener("DOMContentLoaded", () => {
  selectElement = document.getElementById("frog-species");
  selectElement.addEventListener("change", updateFrog);
});

frogImages = {
  common_frog:
    "https://media.istockphoto.com/id/978411170/photo/common-frog-on-white-background.jpg?s=612x612&w=0&k=20&c=TKSta74GjhTIAnOl6LZpQAJchxi1jozp-XSfGaK6ZA4=",
  red_eyed_tree_frog:
    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTfh4O3ag1Cu0xIVlHwBP1G57-5DFIBkI6axqEg3zhk4nLe-6_nhlx6w83hoSMyGT4a9JxArEjYyZ81ToFNUJ7QYYjMdurcmYXuZyqRgw",
  poison_dart_frog:
    "https://i.natgeofe.com/k/a27c5d1f-9f3e-49f9-ae6d-a2b349c283c7/poison-dart-frog-orange-blue.jpg?wp=1&w=1436&h=808",
  bullfrog:
    "https://upload.wikimedia.org/wikipedia/commons/3/36/Lithobates_catesbeianus1.jpg",
  golden_toad:
    "https://upload.wikimedia.org/wikipedia/commons/6/6e/Bufo_periglenes1.jpg",
};

function updateFrog(event) {
  let frogDisplay = document.querySelector(".frog-display");
  console.log(frogDisplay);

  frogDisplay.innerHTML = `<img src="${frogImages[selectElement.value]}" alt="${
    selectElement.value
  }" />`;

  frogDisplay.src = frogImages[selectElement.value];
  frogDisplay.alt = selectElement.value;

  // console.log(selectElement.value);
  // console.log("hdfjdklfjdklfj");
  // console.log(event);
}
