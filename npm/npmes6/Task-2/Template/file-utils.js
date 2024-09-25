import { readFileSync, writeFileSync, renameSync } from 'fs';

export const fileReader = (path) => {
  try {
    const result = readFileSync(path, 'utf8');
    return result;
  } catch (error) {
    return error.message;
  }
};

export const fileJoin = (filePath, ...paths) => {
  // code here
  try {
  let content = '';
  for (path of paths) {
    const text = fileReader(path);

    content += text;
  }
  writeFileSync(filePath, content);

  return 'New file created';
  } catch(error) {
    return error.message;
  }
};

export const fileRename = (filePath, newPath) => {
  // Code here
  try {
    renameSync(filePath, newPath);
    return `${filePath} renamed`;
  } catch (error) {
    return error.message;
  }
};
