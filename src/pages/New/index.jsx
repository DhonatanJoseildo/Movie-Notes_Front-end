import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

import { Container, Form, TitleMovie, ButtonControl } from "./styles";

import { Header } from '../../components/Header';
import { ButtonReturn } from '../../components/ButtonReturn';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { Section } from "../../components/Section";
import { MovieItem } from '../../components/MovieItem';
import { Button } from '../../components/Button';


export function New() {

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");

  const [description, setDescription] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();  



  function handleBack() {
    navigate(-1);
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewNote() {
    if (!title) {
      return alert("Digite o titulo da nota");
    }

    if (newTag) {
      return alert("Você deixou uma tag no campo para adicionar,mas não clicou em adicionar. clique para adicionar ou deixe vazio.")
    }

    await api.post("/notes", {
      title,
      description,
      rating,
      tags
    });

    alert("Filme adicionado com sucesso!");
    handleBack();
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <ButtonReturn 
            title="Voltar"
            onClick={handleBack}
            />
            <h1>Novo filme</h1>
          </header>

          <TitleMovie>
            <Input placeholder="Titulo" 
            onChange={e => setTitle(e.target.value)}
            />
            <Input placeholder="Sua nota (de 0 a 10)" 
            onChange={e => setRating(e.target.value)}
            type="number" />
          </TitleMovie>
          <Textarea placeholder="Observações" 
          onChange={e => setDescription(e.target.value)}
          />

          <Section title="Gênero do filme">
            <div className="tags">
              {
                tags.map((tag, index) => (
                  <MovieItem 
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                  />
                ))
              }

              <MovieItem 
              isNew
              placeholder="Nova tag"
              onChange={e => setNewTag(e.target.value)}
              value={newTag}
              onClick={handleAddTag}
              />
            </div>
          </Section>

          <ButtonControl>
            <Button 
            title="Cancelar Filme"
            onClick={handleBack}
            />

            <Button 
            title="Adicionar Filme" 
            onClick={handleNewNote}
            />
          </ButtonControl>
        </Form>
      </main>
    </Container>
  )
}