export const peopleGrid = (data = []) => {
  const NUMBER_OF_COLUMNS = data.length <= 4 ? data.length : 3;

  const learners2D = [];
  for (let i = 0; i < data.length; i += NUMBER_OF_COLUMNS) {
    let nextRow = [];
    for (let j = 0; j < NUMBER_OF_COLUMNS; j++) {
      nextRow.push(data[i + j]);
    }
    learners2D.push(nextRow.map((learner) => learner || null));
  }

  let table = '<table>';
  for (const dataRow of learners2D) {
    let row = '<tr>';
    for (const thing of dataRow) {
      row += `<td>\n\n${thing || ''}\n\n</td>`;
    }
    row += '</tr>';
    table += row;
  }
  table += '</table>';

  return table;
};
