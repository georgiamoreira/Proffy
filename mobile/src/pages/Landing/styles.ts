import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#8257e5',
    justifyContent: 'center',
    padding: 20,
  },

  banner: {
    width: '100%',
    resizeMode: 'contain',
    marginBottom: -30,
    
  },

  title: {
    fontFamily: 'Poppins_400Regular',
    color: '#fff',
    fontSize: 20,
    lineHeight: 30,
    marginTop: -20,  // GEORGIA EU DIMINUI ESSE MARGIN TOP PARA DEIXAR A TELA MENORZINHA *  
    marginBottom: 10,
    
  },

  titleBold: {
    fontFamily: 'Poppins_600SemiBold',
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  button: {
    height: 130,
    width: '48%',
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 20,
    justifyContent: 'space-between',
    marginTop: 10,
    

  },

  buttonPrimary: {
    backgroundColor: '#F9A826'
  },

  buttonSecondary: {
    backgroundColor: '#9871f5'
    // backgroundColor: '#04d361'
  },

  buttonText: {
    fontFamily: 'Archivo_700Bold',
    color: '#fff',
    fontSize: 20,    
  },

  totalConnections: {
    fontFamily: 'Poppins_400Regular',
    color: '#d4c2ff',
    fontSize: 12,
    lineHeight: 20,
    maxWidth: 220,
    marginTop: 30,
  },

});

export default styles;