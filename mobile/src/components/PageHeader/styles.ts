import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 34,
    backgroundColor: '#8257e5',
  },

  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',    
  },
  

  title: {
    fontFamily: 'Archivo_700Bold',
    color: '#fff',
    fontSize: 24,
    lineHeight: 22,
    maxWidth: 160,
    marginVertical: 30,    
  },
})

export default styles;