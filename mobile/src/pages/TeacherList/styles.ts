import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f7',
  },

  teacherList: {
    marginTop: -40,    
  },

  searchForm: {
    marginBottom: 14,    
  },

  label: {
    color: '#d4c2ff',
    fontFamily: 'Poppins_400Regular',    
  },

  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',    
  },

  inputBlock: {
    width: '48%',    
  },           

  input: {
    height: 44,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 14,
    marginTop: 2,
    marginBottom: 10,   
  },

  submitButton: {
    backgroundColor: '#F9A826',
    height: 46,
    borderRadius: 8,
    flexDirection: 'row',    
    justifyContent: 'center',
    alignItems: 'center',
  },

  submitButtonText: {
    color: '#fff',
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
  },

})

export default styles;