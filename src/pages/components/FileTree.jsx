import React from 'react';
import fs from 'fs';

function FileTree({ path, idPrefix = '', parentDependencies = [] }) {
  const files = fs.readdirSync(path);

  let fileId = 1;

  const fileTree = files.map((file) => {
    const filePath = `${path}/${file}`;
    const isDirectory = fs.lstatSync(filePath).isDirectory();

    const fileIdWithPrefix = `${idPrefix}${fileId}`;
    fileId++;

    let dependencies = [];
    let dependentFiles = [];

    if (isDirectory) {
      const childPath = `${path}/${file}`;
      const childTree = FileTree({
        path: childPath,
        idPrefix: `${fileIdWithPrefix}-`,
        parentDependencies: dependencies,
      });

      dependencies = childTree.dependencies;
      dependentFiles = childTree.dependentFiles;
    } else {
      const fileContents = fs.readFileSync(filePath, 'utf-8');

      const regex = /import\s+.*?\s+from\s+['"](.*?)['"]/g;
      let match;
      while ((match = regex.exec(fileContents)) !== null) {
        dependencies.push(match[1]);
      }

      dependentFiles = parentDependencies.filter((depId) => depId !== fileIdWithPrefix);
    }

    const fileObject = {
      id: fileIdWithPrefix,
      name: file,
      type: isDirectory ? 'directory' : 'file',
      dependencies,
      dependentFiles,
    };

    return fileObject;
  });

  fs.writeFileSync('fileTree.json', JSON.stringify(fileTree, null, 2));

  return {
    dependencies: parentDependencies,
    dependentFiles: fileTree.map((file) => file.id),
  };
}

export default FileTree;
