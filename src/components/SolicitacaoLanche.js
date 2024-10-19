// src/components/SolicitacaoLanche.js
import React, { useState } from 'react';
import solicitarBanner from '../images/solicitar.png'
import { Box, TextField, Button, Checkbox, FormControlLabel, Typography, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container } from '@mui/material';

const lanches = [
  { id: 1, nome: 'Pão de queijo', preco: 10 },
  { id: 2, nome: 'Coxinha', preco: 15 },
  { id: 3, nome: 'Suco', preco: 10 },
];

export default function SolicitacaoLanche() {
  const [nomeAluno, setNomeAluno] = useState('');
  const [turma, setTurma] = useState('');
  const [selectedLanches, setSelectedLanches] = useState({});
  const [quantidade, setQuantidade] = useState({}); // Mudar para um objeto para cada lanche

  // Função para lidar com a seleção de lanches
  const handleLancheChange = (id) => {
    setSelectedLanches((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Função para enviar o formulário
  const handleSubmit = () => {
    const lanchesSelecionados = lanches.filter((lanche) => selectedLanches[lanche.id]);
    console.log('Nome:', nomeAluno);
    console.log('Turma:', turma);
    console.log('Lanches Selecionados:', lanchesSelecionados);
    console.log('Quantidades:', quantidade);
  };

  // Verifica se o formulário é válido
  const isFormValid = () => {
    const isLancheSelecionado = Object.keys(selectedLanches).some((id) => selectedLanches[id] && quantidade[id]);
    return nomeAluno.trim() !== '' && turma.trim() !== '' && isLancheSelecionado;
  };

  return (
    <Container sx={{ p: 3 }}>
      <img src={solicitarBanner} 
      alt="Lanches" 
      style={{
          width: '80%', 
          height: '100%', 
          borderRadius: '16px', 
          marginTop: '0px', 
          marginBottom: '30px', 
        }} />
      <Typography variant="h4" gutterBottom align="center" style={{ fontWeight: 'bold' }}>Solicitar Lanche</Typography>

      <Grid container spacing={2} sx={{ maxWidth: '900px', margin: '0 auto' }}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Nome do Aluno"
            fullWidth
            value={nomeAluno}
            onChange={(e) => setNomeAluno(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Turma"
            fullWidth
            value={turma}
            onChange={(e) => setTurma(e.target.value)}
            required
          />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6">Selecione os Lanches</Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Lanche</TableCell>
                  <TableCell>Preço</TableCell>
                  <TableCell>Quantidade</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {lanches.map((lanche) => (
                  <TableRow key={lanche.id}>
                    <TableCell>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={!!selectedLanches[lanche.id]}
                            onChange={() => handleLancheChange(lanche.id)}
                          />
                        }
                        label={lanche.nome}
                      />
                    </TableCell>
                    <TableCell>R$ {lanche.preco.toFixed(2)}</TableCell>
                    <TableCell>
                      <TextField
                        type="number"
                        value={quantidade[lanche.id] || 0}
                        onChange={(e) => setQuantidade({ ...quantidade, [lanche.id]: Number(e.target.value) })}
                        inputProps={{ min: 0 }}
                        disabled={!selectedLanches[lanche.id]} // Desabilita se não estiver selecionado
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={!isFormValid()} // Desabilita se o formulário não for válido
          >
            Enviar Pedido
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
