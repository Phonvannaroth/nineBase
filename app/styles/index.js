import { StyleSheet } from "react-native";
import { COLORS, LAYOUT } from "../modules";
import { fontSemiBold, fontNormal, fontBold } from "../../functions/customFont";

export default StyleSheet.create({
  iconTabContainer: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  TopTabActive: {
    color: COLORS.ACTIVE,
    fontSize: 14
  },
  TopTab: {
    fontSize: 14,
    color: COLORS.PRIMARY
  },
  labelTabActive: {
    color: COLORS.ACTIVE,
    fontSize: 12
  },
  labelTab: {
    fontSize: 10,
    color: COLORS.PRIMARY
  },
  body: {
    paddingHorizontal: LAYOUT.BODY_HORIZONTAL
  },
  containerWhite: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  flx1: {
    flex: 1
  },
  rows: {
    flexDirection: "row",
    alignItems: "center"
  },
  header: {
    paddingHorizontal: LAYOUT.BODY_HORIZONTAL_24,
    paddingVertical: 5,
    flexDirection: "row",
    backgroundColor: COLORS.WHITE,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#f8f8f8"
  },
  headerTitle: {
    fontSize: LAYOUT.FONT_H4,
    ...fontSemiBold
  },
  headerRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  headerTitleBox: {
    paddingLeft: 10,
    justifyContent: "center"
  },
  headerLogo: {
    width: 35,
    height: 35,
    resizeMode: "contain"
  },
  headerIcon: {
    height: 35,
    width: 35,
    alignItems: "center",
    justifyContent: "center"
  },
  cardShadowBottom: {
    backgroundColor: COLORS.WHITE,
    shadowColor: "#CFCCDC",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowRadius: 5,
    shadowOpacity: 0.3,
    elevation: 5,
    marginBottom: LAYOUT.BODY_HORIZONTAL
  },
  imageBox: {
    height: "100%",
    width: "100%",
    resizeMode: "cover"
  },
  centerMode: {
    alignItems: "center",
    justifyContent: "center"
  }
});
