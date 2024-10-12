let selectElement;

document.addEventListener("DOMContentLoaded", () => {
  selectElement = document.getElementById("frog-species");
  selectElement.addEventListener("change", updateFrog);
});

// Define frog images
let frogImages = {
  common_frog:
    "https://media.istockphoto.com/id/978411170/photo/common-frog-on-white-background.jpg?s=612x612&w=0&k=20&c=TKSta74GjhTIAnOl6LZpQAJchxi1jozp-XSfGaK6ZA4=",
  red_eyed_tree_frog:
    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTfh4O3ag1Cu0xIVlHwBP1G57-5DFIBkI6axqEg3zhk4nLe-6_nhlx6w83hoSMyGT4a9JxArEjYyZ81ToFNUJ7QYYjMdurcmYXuZyqRgw",
  poison_dart_frog:
    "https://i.natgeofe.com/k/a27c5d1f-9f3e-49f9-ae6d-a2b349c283c7/poison-dart-frog-orange-blue.jpg?wp=1&w=1436&h=808",
  bullfrog:
    "https://cdn.britannica.com/45/179145-050-51295E7A/African-bullfrog-South-Africa.jpg?w=300",
  golden_toad:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Bufo_periglenes2.jpg/440px-Bufo_periglenes2.jpg",
};

// Define frog biographies
let frogBiographies = {
  common_frog:
    "The Common Frog, a.k.a. Rana temporaria, is nature’s ultimate amphibious ninja! Sporting a slimy green-brown bodysuit that doubles as camouflage, this froggy master of disguise leaps through the grass like a bouncy ball with legs. Its superpower? Turning insects into gourmet meals with a flick of its lightning-fast tongue! When it’s not moonlighting as a bug-slaying superhero, the Common Frog can be found lounging in ponds, croaking sweet serenades to its froggy friends, and enjoying a spa-like existence in muddy puddles. Truly, it’s the James Bond of the amphibian world—cool, calm, and just a little bit slimy!",
  red_eyed_tree_frog:
    "The Red-Eyed Frog, Agalychnis callidryas, is basically the neon party animal of the rainforest. With its bright green body, electric blue racing stripes, and eyes that look like they've been stolen from a sci-fi movie villain, this frog screams, 'Look at me!'—and then promptly vanishes into the leaves when it jumps. Its giant red eyes aren't just for show, though; they're its way of giving potential predators a heart attack when they get too close. When it's not pulling off epic scare tactics, the Red-Eyed Frog spends its nights climbing trees with its sticky, suction-cup fingers and perfecting its 'extreme lounging' pose on leaves. It's the ultimate tropical tree-hugger—complete with psychedelic vibes!",
  poison_dart_frog:
    "The Poison Dart Frog, Dendrobates, is like a tiny, vibrant superhero dressed for a rave, sporting a dazzling outfit of electric blues, yellows, and oranges that scream, ‘Don’t touch me unless you want a serious case of the ouchies!’ This pint-sized powerhouse is no bigger than a jellybean but packs a punch that could send even the bravest predator running for the hills. Instead of using its superpowers for good, it prefers to chill on leaves, showing off its bright colors while sipping on some rainforest cocktails (a.k.a. raindrops). With skin so toxic that even the thought of touching it can give you the shivers, the Poison Dart Frog is like nature’s own warning label—‘Look, but don’t touch!’ It’s the ultimate diva of the jungle, always ready for the spotlight but with a flair for the dramatic when it comes to self-defense!.",
  bullfrog:
    "The American Bullfrog, Lithobates catesbeianus, is the heavyweight champion of the amphibian world, boasting a belly as round as a beach ball and a croak that could rival a foghorn! Known for its lazy lounging and gourmet tastes, this froggy connoisseur is always on the lookout for its next meal—be it a juicy insect, a hapless fish, or even the occasional wayward snack like a small mammal (talk about a buffet!). With skin that ranges from olive green to muddy brown, it’s like the original couch potato, blending seamlessly into its swampy habitat. When it’s not basking in the sun or croaking out love songs that sound like a bull’s ‘moo,’ the American Bullfrog can often be found leaping with all the grace of a bowling ball on a trampoline. It’s a big, boisterous buddy that loves to ribbit and roll, making it the life of the pond party!",
  golden_toad:
    "The Golden Frog, Phyllobates terribilis, is nature's own little golden nugget, shining bright like a piece of treasure in the rainforest! With its vibrant yellow skin that looks like it was dipped in sunshine, this amphibian diva makes a fashion statement that says, ‘I’m fabulous and I know it!’ But beware—this frog's dazzling looks come with a serious warning label, as it carries enough toxins to send even the fiercest predator into a panic. Often found chilling on leaves or lounging in the tropical sun, the Golden Frog loves to bask in its own glory, making it the ultimate Instagram influencer of the amphibian world. When it’s not striking a pose, it enjoys a diet of ants that would make any food critic swoon. With its dazzling color, deadly defense, and laid-back lifestyle, the Golden Frog is like a celebrity who knows they’re the star of the show—sparkling, sassy, and just a bit toxic!",
};

function updateFrog(event) {
  let frogDisplay = document.querySelector(".frog-display");
  let frogBio = document.querySelector(".frog-bio");

  // Update the frog image
  frogDisplay.innerHTML = `<img src="${frogImages[selectElement.value]}" alt="${
    selectElement.value
  }" />`;

  // Update the frog biography
  frogBio.innerHTML = `<p>${frogBiographies[selectElement.value]}</p>`;
}
