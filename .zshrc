HISTFILE=~/.histfile
HISTSIZE=10000
SAVEHIST=10000
bindkey -v

alias dotgit='/usr/bin/git --git-dir=/home/etherbits/arch-config/ --work-tree=/home/etherbits'
alias vim=nvim

# add env variables
source ~/.env.sh

export EDITOR=nvim

zo(){
if [[ $# -eq 1 ]]; then
      selected=$1
      selected=$(find  ~/projects  ~/ ~/.config/ -mindepth 1 -maxdepth 1 -type d | fzf -q $selected -1)
  else
      selected=$(find  ~/projects  ~/ ~/.config/ -mindepth 1 -maxdepth 1 -type d | fzf)
  fi

  if [[ -z $selected ]]; then
      exit 0
  fi

  echo $selected
  zeditor $selected
}

# custom commands
pf(){
  if [[ $# -eq 1 ]]; then
      selected=$1
      selected=$(find  ~/projects  ~/ ~/.config/ -mindepth 1 -maxdepth 1 -type d | fzf -q $selected -1)
  else
      selected=$(find  ~/projects  ~/ ~/.config/ -mindepth 1 -maxdepth 1 -type d | fzf)
  fi

  if [[ -z $selected ]]; then
      exit 0
  fi

  echo $selected

  selected_name=$(basename "$selected" | tr . _)

  if ! tmux has-session -t=$selected_name 2> /dev/null; then
    tmux new -s $selected_name -c $selected -d -x "$(tput cols)" -y "$(tput lines)"
    if [[ $selected == ~/projects/* ]]; then
      tmux splitw -h -l '75%' -t $selected_name -c $selected
      tmux send-keys -t $selected_name 'vim .' Enter
    fi
    tmux attach -t $selected_name
  else
    tmux attach-session -t $selected_name
  fi

}

qc(){
  git add .
  git commit -m "$1"
}

qcp(){
  git add .
  git commit -m "$1"
  branch=$(git branch --show-current)
  git push origin $branch
}

cdf(){
  dir=$(find $1 -type d | fzf -q $2)
  if [[ -n $dir ]]; then
    cd $dir
  else
    echo "No directory found"
  fi
}

ghme(){
  xdg-open https://github.com/etherbits &!
}

qcpdots(){
  dotgit add -u
  dotgit commit -m "$1"
  dotgit push origin main
}

i(){
	sudo pacman -S "$1"
}


unzipd(){
  if [[ $# != 1 ]]; then echo I need a single argument, the name of the archive to extract; return 1; fi
  target="${1%.zip}"
  unzip "$1" -d "${target##*/}"
}

unzipad(){
  for zip in *.zip
  do
    dirname=`echo $zip | sed 's/\.zip$//'`
    if mkdir "$dirname"
    then
      if cd "$dirname"
      then
        unzip ../"$zip"
        cd ..
        # rm -f $zip # Uncomment to delete the original zip file
      else
        echo "Could not unpack $zip - cd failed"
      fi
    else
      echo "Could not unpack $zip - mkdir failed"
    fi
  done
}

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
eval "$(starship init zsh)"
source /home/etherbits/.config/zsh/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
#source /home/etherbits/.config/zsh/zsh-autocomplete/zsh-autocomplete.plugin.zsh
source /home/etherbits/.config/zsh/zsh-autosuggestions/zsh-autosuggestions.zsh

# pnpm
export PNPM_HOME="/home/etherbits/.local/share/pnpm"
case ":$PATH:" in
  *":$PNPM_HOME:"*) ;;
  *) export PATH="$PNPM_HOME:$PATH" ;;
esac
# pnpm end
