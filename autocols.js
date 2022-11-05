class Autocols {
  timeoutId = null;
  forceRunFrequency = 32;

  constructor() {
    this.run();

    window.addEventListener("resize", () => {
      if (this.timeoutId % this.forceRunFrequency === 0) {
        this.run();
      }

      clearTimeout(this.timeoutId);

      this.timeoutId = setTimeout(() => {
        this.run();
        this.timeoutId = null;
      }, 100);
    });
  }

  run() {
    const tables = document.querySelectorAll("table.autocols");

    if (!tables || !tables.length) return;

    for (const table of tables) {
      const hiddenCells = table.querySelectorAll(
        'th[style="display: none;"],td[style="display: none;"]'
      );

      if (!hiddenCells || !hiddenCells.length) continue;

      hiddenCells.forEach((cell) => {
        cell.removeAttribute("style");
      });
    }

    const isTableTooBig = (table) => {
      return table.clientWidth > table.parentElement.clientWidth;
    };

    for (const table of tables) {
      const keepIndexes = table.dataset.keep_indexes
        ? table.dataset.keep_indexes.split(",").map((i) => parseInt(i) - 1)
        : [0];

      if (isTableTooBig(table)) {
        const tdElementsInFirstRow = table
          .querySelector("td")
          .parentElement.querySelectorAll("td");

        for (let i = tdElementsInFirstRow.length - 1; i >= 0; i--) {
          if (!isTableTooBig(table)) continue;

          if (keepIndexes.indexOf(i) > -1) continue;

          const td = tdElementsInFirstRow[i];

          if (!td || !td.style) continue;

          if (!td.style.display || td.style.display !== "none") {
            const indexToHide = i + 1;
            try {
              table
                .querySelectorAll(
                  `tr th:nth-of-type(${indexToHide}), tr td:nth-of-type(${indexToHide})`
                )
                .forEach((cell) => {
                  cell.style.display = "none";
                });
            } catch (error) {
              console.error(error);
            }
          }
        }
      }
    }
  }
}

globalThis.Autocols = Autocols;
