#!/bin/bash

statusGit(){
    echo ' '
    git status
    echo ' '
}

criarCommit(){
    read -p "Insira a mensagem do commit: " mensagem

    if( [ -z "$mensagem" ] ); then
       echo "Mensagem não pode ser vazia"
       exit 1
    else
        git add .
        git commit -m "$mensagem"
        git flow feature finish new
        git push 
        git flow feature start new
        clear

        
        echo -e '\e[92m------------------------------\e[0m'
        echo -e '\e[92m|\e[0m \e[90m - Commit \e[92mrealizado \e[0m \e[0m'
        echo -e '\e[92m|\e[0m \e[90m - Feature do git flow \e[92mfinalizada \e[0m \e[0m'
        echo -e '\e[92m|\e[0m \e[90m - Push da develop \e[92mfeito\e[0m \e[90mao\e[0m \e[96mGitHub\e[0m \e[0m'
        echo -e '\e[92m|\e[0m \e[90m - Feature do git flow \e[92miniciada \e[0m \e[0m'
        echo -e '\e[92m|\e[0m '
        echo -e '\e[92m|\e[0m    \e[96mHappy coding :)\e[0m'
        echo -e '\e[92m------------------------------\e[0m'
        echo ' '
    fi
}

while true; do
    read -p "Deseja ver os status ? (git status)" yn
    case $yn in
        [YysS]* ) statusGit; break;;
        [Nn]* ) break;;
        * ) echo 'Responda "y" ou "n"';;
    esac
done

while true; do
    read -p "Deseja fazer um commit ?" yn
    case $yn in
        [YysS]* ) criarCommit; break;;
        [Nn]* ) break;;
        * ) echo 'Responda "y" ou "n"';;
    esac
done
