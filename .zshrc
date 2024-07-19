HISTFILE=~/.histfile
HISTSIZE=10000
SAVEHIST=10000
bindkey -v

alias dotgit='/usr/bin/git --git-dir=/home/etherbits/arch-config/ --work-tree=/home/etherbits'
alias vim=nvim
alias zj=zellij

# add env variables
source ~/.env.sh

export EDITOR=nvim

# custom commands

# find and go to directory using fzf
pc(){
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
  cd $selected
}

pf(){
  selected=$( pc $1)
  selected_name=$(basename "$selected" | tr . _)

  cd $selected
  zj ls -s | grep -xq $selected_name && zj attach $selected_name || zj -s $selected_name
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
