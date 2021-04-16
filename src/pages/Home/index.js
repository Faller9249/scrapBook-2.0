import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import MessageIcon from '@material-ui/icons/Message';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import MeuRecado from '../../components/Recado';
import scrapApi from '../../services/scrap';



const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  
  
  export default function Scraps() {
    const classes = useStyles();
    
    const [scraps, setScraps] =useState([]);
    const [titulo, setTitulo]= useState("");
    const [descricao, setDescricao]= useState("");

    function novoScrap(){
        scrapApi.postScrap(titulo, descricao).then((dados)=>{
            if(dados.success){
                setTitulo('');
                setDescricao('');
                BuscaDados();
            }
        })
    }

    useEffect(() => {
        BuscaDados();
      }, []);

      function BuscaDados(){
        scrapApi.getScraps().then((dados) => {
            if (dados.success) {
              setScraps(dados.data);
            } else {
              setScraps([])
            }
          });
      }

    return (
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <MessageIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Scrapbook
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  name="title"
                  variant="outlined"
                  required
                  fullWidth
                  id="title"
                  label="Título"
                  autoFocus
                  value={titulo}
                  onChange={e => setTitulo(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="longText"
                  label="Descrição"
                  name="lastName"
                  autoComplete="lname"
                  value={descricao}
                  onChange={e => setDescricao(e.target.value)}
                />
              </Grid>            
            </Grid>
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onclick={novoScrap}
            >
              Salvar
            </Button>          
          </form>
        </div>
          <Grid container spacing={5} alignItems="flex-end">
          {scraps.map((scrap) => (
              <MeuRecado key={scrap.id} scrap={scrap} />
            ))}
          </Grid> 
      </Container>
    );
  }