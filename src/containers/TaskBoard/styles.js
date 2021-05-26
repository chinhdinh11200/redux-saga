const styles = (theme) => ({
  taskboard: {
    padding: 10,
    display: "flex",
    alignItems: "center",
  },
  shape: {
    padding: "5px 10px",
    margin: 10,
    backgroundColor: theme.color.primary,
    color: theme.shape.textColor,
    borderRadius: theme.shape.borderRadius,
  },
});

export default styles;
