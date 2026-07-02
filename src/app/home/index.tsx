import { useState } from 'react'
import { TextInput } from 'react-native'
import normalizeText from '@/scripts/normalizeText';
import Note from '@/components/Note';

export default function Home() {
  const [notes, setNotes] = useState([
    {
        id: 1,
        title: "Aprendendo JavaScript",
        subtitle: "Teste 1",
        content: "Teste 1"
    },
    {
        id: 2,
        title: "Aprendendo TypeScript",
        subtitle: "Teste 2",
        content: "Teste 2"
    }
  ]);
  const [search, setSearch] = useState("")

  return (
    <>
        <TextInput
            className="w-full border-2 border-[#DCDCDC] rounded-md p-2 mb-5 text-sm text-[#000]"
            placeholder="Pesquisar"
            placeholderTextColor="#888"
            onChangeText={setSearch}
        />
        {notes.map(note => (
            <Note
                subtitle={note.subtitle}
                key={note.id}
                hidden={search !== "" && !normalizeText(note.title).includes(normalizeText(search)) && !normalizeText(note.subtitle).includes(normalizeText(search))}
            >
                {note.title}
            </Note>
        ))}
    </>
  )
}