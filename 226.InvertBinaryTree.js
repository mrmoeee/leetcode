
function invertTree(root) {
  if (!root) {
    return null;
  }
  //recursive call to invert left and right sides
  let left = invertTree(root.left);
  let right = invertTree(root.right);
  //change left = right, right = left (invert)
  root.left = right;
  root.right = left;

  return root;
}