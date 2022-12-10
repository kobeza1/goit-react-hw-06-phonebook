import { Form } from './Form/Form';
import { Box } from './App.styled';
import { ContactsList } from './Contacts/ContactsList';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';

const App = () => {
  return (
    <Box>
      <Section title={'Phonebook'}>
        <Form />
      </Section>
      <Section title={'Contacts'}>
        <Filter />
        <ContactsList />
      </Section>
    </Box>
  );
};

export default App;
