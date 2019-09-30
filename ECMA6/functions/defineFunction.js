function examoles(namehere) {
  console.log(namehere + " sucks ");
}

//examoles("ajshebdasd");

const examolesNew = (namehere) => { console.log(namehere + " also sucks "); };

//examolesNew("ajshebdasd");

function nonSense(anystring, lambda) {
  lambda(anystring);
}

nonSense("me", examoles);

nonSense("we", examolesNew);

nonSense("you", (namehere) => { console.log(namehere + " sucks even more "); });