// props drilling   passing props from parent to child and another child and go on
//but this prop drilling is also not the good way,it's make oyur code cluttered
//one biggest dis-advantage is that if you passes your data through all the copmonents and if there will be any change in tha
//data in one components and due this change all the component will get the re-render whih is very bad to happen



//but some times we also need to transfer data from child to parent----how can we do this??
//one way is to build custom hooks and use it ,one way is using local storage -----but these are not good ways overall
// the conecpt is ----lifting the state up
