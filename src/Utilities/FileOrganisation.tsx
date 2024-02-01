import DefaultFiles from '../defaultFiles';

const paths = DefaultFiles.map((defaultFile) => defaultFile.path);

export function getFileNames() {
  const fileNames = paths.map((path) => path.split('/').pop());
  return fileNames.sort();
}

export function generateFileTree() {
  const generateFileStructure = () => {
    const tree = [];
    let nodeIndex = 0;
    paths.reduce(
      (parentNode, filePath) => {
        filePath.split('/').reduce((currentNode, fileName) => {
          let existingNode = (currentNode.children = currentNode.children || [])
            .find((node) => node.name === fileName);
          if (!existingNode) {
            currentNode.children.push(
              (existingNode = { name: fileName, index: nodeIndex++ }),
            );
          }
          // Sort the children array in alphabetical order
          currentNode.children.sort(
            (nodeA, nodeB) => nodeA.name.includes('.')
              && nodeB.name.includes('.')
              && nodeA.name.localeCompare(nodeB.name),
          );
          return existingNode;
        }, parentNode);
        return parentNode;
      },
      { children: tree },
    );
    return tree;
  };
  const fileTree = generateFileStructure();

  return fileTree[0];
}
