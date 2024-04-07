let i = 0;

const counter = () => {
  i = i + 1;
  console.log(i);

  if (i < 10) {
    setTimeout(counter, 1000);
  }
};

counter();
