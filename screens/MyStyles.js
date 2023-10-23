import { StyleSheet, StatusBar, Platform, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    margin: 0,
    padding: 0,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 0,
  },
  container: {
    width: width - 20,
    height: width - 20,
    margin: 10,
  },
  playContainer: {
    width: "100%",
    height: "40%",
    flexDirection: "row",
  },
  homeContainer: {
    width: "100%",
    height: "20%",
    flexDirection: "row",
  },
  startArea: {
    width: "40%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  verticalPath: {
    width: "20%",
    height: "100%",
  },
  horizontalPath: {
    width: "40%",
    height: "100%",
  },
  homePath: {
    width: "20%",
    height: "100%",
  },
  green: {
    backgroundColor: "#84c21f",
  },
  red: {
    backgroundColor: "#dc2418",
  },
  blue: {
    backgroundColor: "#0092dc",
  },
  yellow: {
    backgroundColor: "#f6c700",
  },
  white: {
    backgroundColor: "#fff",
  },
  subStartArea: {
    width: "70%",
    height: "70%",
  },
  subStartArea_View: {
    width: "35%",
    height: "35%",
    margin: "7.5%",
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    shadowOpacity: 1,
    elevation: 3,
    backgroundColor: "white",
    transition: "all 0.3s",
    transform: [{ scaleX: 1.05 }],
  },
  subVerticalPath: {
    width: "33.33%",
    height: "16.667%",
    borderWidth: 1,
    borderColor: "#000",
  },
  subHorizontalPath: {
    height: "33.33%",
    width: "16.667%",
    borderWidth: 1,
    borderColor: "#000",
  },
  icon: {
    margin: 3,
    color: "#fff",
  },
  triangleIcon: {
    margin: 2,
  },
  triangleContainer: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  triangleRight: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 55,
    borderTopWidth: 55,
    borderBottomWidth: 55,
    borderLeftColor: "#84c21f",
    borderTopColor: "transparent",
    borderBottomColor: "transparent",
    position: "absolute",
    left: 0,
    top: 5,
  },
  triangleUp: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 55,
    borderRightWidth: 55,
    borderBottomWidth: 55,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#dc2418",
    position: "absolute",
    left: 5,
    bottom: 0,
  },
  triangleLeft: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderTopWidth: 55,
    borderRightWidth: 55,
    borderBottomWidth: 55,
    borderTopColor: "transparent",
    borderRightColor: "#0092dc",
    borderBottomColor: "transparent",
    position: "absolute",
    top: 5,
    right: 0,
  },
  triangleDown: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderTopWidth: 55,
    borderRightWidth: 55,
    borderLeftWidth: 55,
    borderTopColor: "#f6c700",
    borderRightColor: "transparent",
    borderLeftColor: "transparent",
    position: "absolute",
    top: 0,
    right: 5,
  },
  circle: {
    height: "50%",
    width: "50%",
    margin: 28,
    position: "absolute",
    backgroundColor: "#fff",
    borderRadius: "50%",
    zIndex: 1,
  },
  text: {
    width: "80%",
    height: "40%",
    marginVertical: 20,
    marginHorizontal: 10,
    fontSize: 8,
    color: "#000",
    fontFamily: "Montserrat",
  },

  /*
  .row1-col1, # startArea
.row1-col3,
.row3-col1,
.row3-col3{
    width: 40%;
    height:100%;
    align-items: center;
    justify-content: center;
    display: flex;
}
.row1-col2, # verticalPath
.row3-col2{
    width:20%;
    height:100%
}
.row2-col1, #horizontalPath
.row2-col3{
    width:40%;
    height:100%;
}
.row2-col2{ #homePath
    width:20%;
    height:100%;
}
.row1-col1-child, # subStartArea
.row1-col3-child,
.row3-col1-child,
.row3-col3-child{
    width:70%;
    height:70%;
}
.row1-col1-child>div, #subStartArea_View
.row1-col3-child>div,
.row3-col1-child>div,
.row3-col3-child>div{
    width:35%;
    height:35%;
    margin:7.5%;
    float:left;
    box-shadow: 0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);
    transition: all 0.3s cubic-bezier(.25,.8,25,1);
}
.row1-col1-child>div:hover, #cancel
.row1-col3-child>div:hover,
.row3-col1-child>div:hover,
.row3-col3-child>div:hover{
    box-shadow: -2px 14px 28px rgba(0,0,0,.25),-2px 10px 28px rgba(0,0,0,.22);
}
.row1-col2>div, #subVerticalPath
.row3-col2>div{
    width: 33.33%;
    height:16.667%;
    float:left;
    border:1px solid #000;
}
.row2-col1>div, #subHorizontalPath
.row2-col3>div{
    height: 33.35%;
    width:16.667%;
    float:left;
    border:1px solid #000;
}
.icon{
    margin:3px;
    color:#fff;
}
.triangle-icon{ #triangleIcon
    margin:2px;
}
.contain-triangle{ #triangleContainer
    width:100%;
    height:100%;
    position: relative;
}
.triangle-right{ #triangleRight
    width:0;
    height:0;
    border-top: 55px solid transparent;
    border-left: 55px solid #84c21f;
    border-bottom: 55px solid transparent;
    position: absolute;
    left:0;
    top:5px;
}
.triangle-up{ #triangleUp
    width: 0;
    height: 0;
    border-left: 55px solid transparent;
    border-right: 55px solid transparent;
    border-bottom: 55px solid #dc2418;
    position: absolute;
    left: 5px;
    bottom: 0;
}
.triangle-left{ #triangleLeft
    width:0;
    height:0;
    border-right: 55px solid #0092dc;
    border-bottom: 55px solid transparent;
    border-top: 55px solid transparent;
    right:0;
    top:5px;
    position:absolute;
}
.triangle-down{ #triangleDown
    width:0;
    height:0;
    border-left: 55px solid transparent;
    border-right: 55px solid transparent;
    border-top: 55px solid #f6c700;
    position: absolute;
    right: 5px;
    top: 0;
}
.circle{
    height:50%;
    width:50%;
    margin: 28px;
    position: absolute;
    background: #fff;
    border-radius: 50%;
    z-index:1;
}
.text{
    width:80%;
    height:40%;
    margin: 20px 10px;
    font-size: 8px;
    color: #000;
    font-family: 'Montserrat'
}
  */
});
